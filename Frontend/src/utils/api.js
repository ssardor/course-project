const baseURL = 'https://course-project-1-75dw.onrender.com';

// Обработка ответа
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

// Регистрация пользователя
export const registerUser = async (userData) => {
  const response = await fetch(`${baseURL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return handleResponse(response);
};

// Вход пользователя
export const loginUser = async (userData) => {
  const response = await fetch(`${baseURL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return handleResponse(response);
};

// Редактирование профиля
export const editProfile = async (userData) => {
  const response = await fetch(`${baseURL}/users/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return handleResponse(response);
};

// Получение шаблонов
export const fetchTemplates = async () => {
  const response = await fetch(`${baseURL}/templates`);
  return handleResponse(response);
};




// Создание формы
export const createForm = async (formData, token) => {
  const response = await fetch(`${baseURL}/forms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });
  return handleResponse(response);
};

// Создание шаблона
export const createTemplate = async (templateData, token) => {
  const response = await fetch(`${baseURL}/templates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(templateData),
  });
  return handleResponse(response);
};

// Добавьте другие функции аналогично...

// Обновление шаблона
export const updateTemplate = async (id, templateData) => {
  const response = await fetch(`${baseURL}/templates/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(templateData),
  });
  return handleResponse(response);
};

// Удаление шаблона
export const deleteTemplate = async (id) => {
  const response = await fetch(`${baseURL}/templates/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

// Поиск шаблонов
export const searchTemplates = async (query, filter) => {
  const response = await fetch(`${baseURL}/templates/search?query=${query}&filter=${filter}`);
  return handleResponse(response);
};

// Получение форм
export const fetchForms = async () => {
  const response = await fetch(`${baseURL}/forms`);
  return handleResponse(response);
};



// Обновление формы
export const updateForm = async (id, formData) => {
  const response = await fetch(`${baseURL}/forms/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  return handleResponse(response);
};

// Удаление формы
export const deleteForm = async (id) => {
  const response = await fetch(`${baseURL}/forms/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

// Получение комментариев
export const fetchComments = async (templateId) => {
  const response = await fetch(`${baseURL}/comments/${templateId}`);
  return handleResponse(response);
};

// Добавление комментария
export const postComment = async (commentData) => {
  const response = await fetch(`${baseURL}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  });
  return handleResponse(response);
};

// Удаление комментария
export const deleteComment = async (commentId) => {
  const response = await fetch(`${baseURL}/comments/${commentId}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};

// Добавление вопроса
export const addQuestion = async (questionData) => {
  const response = await fetch(`${baseURL}/questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(questionData),
  });
  return handleResponse(response);
};

// Перестановка вопросов
export const reorderQuestions = async (reorderData) => {
  const response = await fetch(`${baseURL}/questions/reorder`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reorderData),
  });
  return handleResponse(response);
};

// Лайк шаблона
export const likeTemplate = async (templateId) => {
  const response = await fetch(`${baseURL}/likes/${templateId}/like`, {
    method: 'POST',
  });
  return handleResponse(response);
};

// Удаление лайка
export const unlikeTemplate = async (templateId) => {
  const response = await fetch(`${baseURL}/likes/${templateId}/unlike`, {
    method: 'DELETE',
  });
  return handleResponse(response);
};