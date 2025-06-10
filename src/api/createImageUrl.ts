import axiosInstance from '../lib/instance';

export default async function createImageURL(value: string) {
  const { data } = await axiosInstance.post(`/images`, { name: value });

  return data.item.url;
}
