import { Component, Show, createSignal } from "solid-js";
import { useForm } from "../../context/FormContext";
import { Navigate, useNavigate } from "@solidjs/router";

const ContactForm: Component = () => {
  const navigate = useNavigate();
  const [pressed, setPressed] = createSignal<boolean>(false);
  const [submitted, { updateForm, validateEmail, validatePhone, submit }] =
    useForm();

  return (
    <form
      class="space-y-6"
      onsubmit={(e) => {
        submit(e).then((success: boolean) => {
          if (!success) {
            setPressed(true);
          } else {
            return navigate("/thanks");
          }
        });
      }}
    >
      <table class="table w-full table-auto">
        <tbody>
          <tr>
            <td class="p-2" colSpan={2}>
              <label for="company_name" class="md:text-lg">
                会社名 <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                class="input-field border-2"
                placeholder="株式会社2WINS"
                required
                oninput={(e) => {
                  setPressed(false);
                  updateForm(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td class="p-2" colSpan={2}>
              <label for="job_title" class="md:text-lg">
                役職
              </label>
              <input
                type="text"
                id="job_title"
                name="job_title"
                class="input-field border-2"
                placeholder="代表取締役"
                oninput={(e) => {
                  setPressed(false);
                  updateForm(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td class="p-2">
              <label for="last_name" class="md:text-lg">
                姓 <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                class="input-field border-2"
                placeholder="ツイ"
                required
                oninput={(e) => {
                  setPressed(false);
                  updateForm(e);
                }}
              />
            </td>
            <td class="p-2">
              <label for="first_name" class="md:text-lg">
                名 <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                class="input-field border-2"
                placeholder="ンズ"
                required
                oninput={(e) => {
                  setPressed(false);
                  updateForm(e);
                }}
              />
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td class="relative p-2" colSpan={2}>
              <label for="email" class="md:text-lg">
                メール <span class="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="input-field border-2 transition-all duration-500"
                classList={{
                  "border-red-500": !validateEmail() && pressed(),
                }}
                placeholder="info@2winsinc.com"
                required
                oninput={(e) => {
                  setPressed(false);
                  updateForm(e);
                }}
              />
              <Show when={!validateEmail() && pressed()}>
                <p class="absolute bottom-4 right-4 text-right text-xs text-red-500">
                  メールのフォーマットが
                  <br class="block md:hidden" />
                  正しくありません。
                </p>
              </Show>
            </td>
          </tr>
          <tr>
            <td class="p-2" colSpan={2}>
              <label for="phone" class="md:text-lg">
                電話番号（ハイフンあり）
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                class="input-field border-2 transition-all duration-500"
                classList={{
                  "border-red-500": !validatePhone() && pressed(),
                }}
                placeholder="000-0000-0000"
                oninput={(e) => {
                  setPressed(false);
                  updateForm(e);
                }}
              />
              <Show when={!validatePhone() && pressed()}>
                <p class="absolute bottom-4 right-4 text-right text-xs text-red-500">
                  電話番号のフォーマットが
                  <br class="block md:hidden" />
                  正しくありません。
                </p>
              </Show>
            </td>
          </tr>
          <tr>
            <td class="p-2" colSpan={2}>
              <label for="message" class="md:text-lg">
                お問い合わせ内容 <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                class="mt-2 w-full resize-none rounded-sm border-2 bg-onBackground px-4 py-2 text-background"
                placeholder="自社アプリを作ろうと思っているので、資料請求させてください"
                rows={5}
                required
                oninput={(e) => {
                  setPressed(false);
                  updateForm(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td class="text-center lg:text-start" colSpan={2}>
              <button
                class="mt-4 border-2 border-onBackground bg-gradient-to-l from-background from-50% to-onBackground to-50% bg-[size:200%] bg-right px-16 py-2 transition-all duration-500 ease-in-out hover:bg-left hover:text-background lg:ml-2"
                type="submit"
              >
                お問い合わせ送信
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default ContactForm;
