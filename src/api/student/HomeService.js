import axiosInstance from '@/config/http.config';

const baseURL = process.env.VUE_APP_BASE_URL;

export function findAllEnrolledCoursesHomeApi(token) {
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    return axiosInstance.get(`${baseURL}courses/listEnrolled`, { headers });
}
