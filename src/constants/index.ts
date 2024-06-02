export const USER_KEY = "user";
export const USER_TYPE_KEY = "type";
export const USER_ID_KEY = "id";
export const ROLE_ID_KEY = "roleId";
export const USERNAME = "username";
export const USER_TOKEN_KEY = "token";
export const USER_FULLNAME_KEY = "fullName";

export function formatDateAsMMDDYYYY(date: Date) {
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng (cộng thêm 1 vì getMonth() trả về giá trị từ 0-11)
  const day = date.getDate().toString().padStart(2, "0"); // Ngày
  const year = date.getFullYear(); // Năm
  const hour = date.getHours();
  const mili = date.getMinutes();
  const second = date.getSeconds();

  const formattedDateString = `${month}/${day}/${year} ${hour}:${mili}:${second}`;

  // Chuyển đổi chuỗi thành đối tượng Date
  return formattedDateString;
}
