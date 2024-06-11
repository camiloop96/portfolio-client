import { useContext, useEffect, useState } from "react";
import {
  CreateCommentService,
  GetCommentListService,
} from "../services/GuestbookServices";
import { FormValues } from "./useForm";
import { GuestbookContext } from "../context/GuestbookContext/GuestbookContext";

import { socket } from "../config/socketConfig";
import { showErrorNotification, showSuccessNotification } from "@/utils/notificationManager";

export const useGuestbook = () => {
  // Loading
  const [loading, setLoading] = useState<boolean>(true);

  const createComments = async (form: FormValues) => {
    try {
      let response = await CreateCommentService(form);
      console.log(response);
      if (response.status === 201) {
        socket.emit("updateComments");
        return showSuccessNotification(response.data.message);
      }
    } catch (error: any) {
      throw error;
    }
  };

  const listComments = async () => {
    try {
      let response = await GetCommentListService();
      return {
        status: response.status,
        payload: response.data,
      };
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  };

  // Valores del contexto
  const { setGuestbookComments } = useContext(GuestbookContext);

  const getCommentList = async () => {
    try {
      let response = await listComments();
      if (response.status === 200) {
        setGuestbookComments(response?.payload);
      }
    } catch (error: any) {
      showErrorNotification(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  // Carga de publicaciones
  useEffect(() => {
    getCommentList();
  }, []);

  // Actualizar publicaciones
  useEffect(() => {
    const handleUpdateOrderList = () => {
      getCommentList();
    };
    socket.on("updateComments", handleUpdateOrderList);
    return () => {
      socket.off("updateComments", handleUpdateOrderList);
    };
  }, []);
  return { createComments, listComments, loading };
};
