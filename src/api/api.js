import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '9831ac8b-b2a8-496a-9698-a0e15e3b96cb',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`).then(response => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response => response.data);
  },
};

export const profileAPI = {
  getProfile(id) {
    return instance.get(`profile/${id}`).then(response => response.data);
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`).then(response => response.data);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status }).then(response => response.data);
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance
      .put(`profile/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => response.data);
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile).then(response => response.data);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then(response => response.data);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance
      .post(`auth/login`, { email, password, rememberMe, captcha })
      .then(response => response.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptcha() {
    return instance.get(`security/get-captcha-url`).then(response => response.data);
  },
};
