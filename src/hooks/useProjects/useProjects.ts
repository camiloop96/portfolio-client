import {
  GetProjectDetailService,
  GetProjectImagesService,
  GetProjectListService,
} from "../../services/ProjectsServices";

export const useProjects = () => {
  const getprojectList = async (category: string) => {
    try {
      let response = await GetProjectListService(category);
      return {
        status: response.status,
        payload: response.data,
      };
    } catch (error: any) {
      throw error;
    }
  };

  const getProjectDetail = async (_id: string | undefined) => {
    try {
      let response = await GetProjectDetailService(_id);
      return {
        status: response.status,
        payload: response.data,
      };
    } catch (error: any) {
      throw error;
    }
  };

  const getProjectImages = async (_id: string | undefined) => {
    try {
      let response = await GetProjectImagesService(_id);
      return {
        status: response.status,
        payload: response.data,
      };
    } catch (error: any) {
      throw error;
    }
  };

  return { getprojectList, getProjectDetail, getProjectImages };
};
