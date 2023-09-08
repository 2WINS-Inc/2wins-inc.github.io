import { Component } from "solid-js";

const ContactForm: Component = () => {
  return (
    <form
      class="space-y-6"
      onsubmit={(e) => {
        e.preventDefault();
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
                name="company_name"
                class="mt-2 w-full rounded-sm bg-onBackground px-4 py-2"
                placeholder="株式会社2WINS"
                required
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
                name="job_title"
                class="mt-2 w-full rounded-sm bg-onBackground px-4 py-2"
                placeholder="代表取締役"
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
                name="last_name"
                class="mt-2 w-full rounded-sm bg-onBackground px-4 py-2"
                placeholder="ツイ"
                required
              />
            </td>
            <td class="p-2">
              <label for="first_name" class="md:text-lg">
                名 <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                class="mt-2 w-full rounded-sm bg-onBackground px-4 py-2"
                placeholder="ンズ"
                required
              />
            </td>
          </tr>
          <tr></tr>
          <tr>
            <td class="p-2" colSpan={2}>
              <label for="email" class="md:text-lg">
                メール <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="email"
                class="mt-2 w-full rounded-sm bg-onBackground px-4 py-2"
                placeholder="info@2winsinc.com"
                required
              />
            </td>
          </tr>
          <tr>
            <td class="p-2" colSpan={2}>
              <label for="phone" class="md:text-lg">
                電話番号
              </label>
              <input
                type="text"
                name="phone"
                class="mt-2 w-full rounded-sm bg-onBackground px-4 py-2"
                placeholder="000-0000-0000"
              />
            </td>
          </tr>
          <tr>
            <td class="p-2" colSpan={2}>
              <label for="message" class="md:text-lg">
                お問い合わせ内容 <span class="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                class="mt-2 w-full resize-none rounded-sm bg-onBackground px-4 py-2"
                placeholder="あああ！！！"
                rows={8}
                required
              />
            </td>
          </tr>
          <tr>
            <td class="text-center lg:text-start" colSpan={2}>
              <button
                class="mt-4 border-2 border-onBackground px-16 py-2 lg:ml-2"
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
