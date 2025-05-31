export default function decodeJWT() {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) throw Error('토큰 가져오기 실패');

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('JWT 디코딩 실패:', e);
    /**@todo 에러 핸들링 */
    return null;
  }
}
