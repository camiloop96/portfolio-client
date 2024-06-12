import {
  GetProjectDetailService,
  GetProjectListService,
} from "../../services/ProjectsServices";

export const useProjects = () => {
  const getprojectList = async () => {
    try {
      let response = await GetProjectListService();
      console.log(response);

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

  return { getprojectList, getProjectDetail };
};
