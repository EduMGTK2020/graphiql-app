import i18next from "i18next";

const trans = new Map<string, { en: string; ru: string }>();

function addError(code: string, en: string, ru: string) {
  trans.set(code, { en, ru });
}
export function e(code: string) {
  const currentLang = i18next.resolvedLanguage;
  const item = trans.get(code);
  if (item) {
    if (currentLang == "en") return item.en;
    if (currentLang == "ru") return item.ru;
  }
  return code;
}

//template - addError( code, en, ru );
addError(
  "auth/invalid-email",
  "Invalid email",
  "Некорректный адрес электронной почты"
);
addError(
  "auth/email-already-in-use",
  "Email address is already in use by another user",
  "Адрес электронной почты уже используется другим пользователем"
);
addError("auth/wrong-password", "Wrong password", "Неправильный пароль");
addError("auth/user-not-found", "User not found", "Пользователь не найден");
addError(
  "auth/network-request-failed",
  "Network request failed, possibly no Internet connection ",
  "Запрос к сети не удался, возможно нет подключения к Интернету "
);
addError(
  "auth/api-key-not-valid.-please-pass-a-valid-api-key.",
  "API-key not valid or missing",
  "API-ключ недействителен или отсутствует"
);

// fetch error
addError(
  "Failed to fetch",
  "Failed to fetch",
  "Не удалось получить данные "
);