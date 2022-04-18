import ImageUrlBuilder from '@sanity/image-url';
import client from './client';
const builder = ImageUrlBuilder(client);
function urlFor(source) {
  console.log(source);
  return builder.image(source).width(300).url();
}
export { urlFor };
