import { notifications } from "@mantine/notifications";
import i18next from "./lang/langSetup";
import { e } from "./auth/firebaseErrorTrans";


export function currentTime() {
  const d = new Date();
  return (
    "" + d.getHours() + ":" + (d.getMinutes() < 10 ? "0" : "") + d.getMinutes()
  );
}

export function notifySuccess(title: string, message: string) {
  notifications.show({
    title: i18next.t(title),
    message: currentTime() + " - " + i18next.t(message),
    autoClose: 5000,
    color: "green",
  });
}

export function notifyError(title: string, message: string) {
  notifications.show({
    title: i18next.t(title),
    message: currentTime() + " - " + i18next.t(e(message)),
    autoClose: 5000,
    color: "red",
  });
}
