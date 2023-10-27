/**
 * Get the image version
 * @returns {string | null} The image version
 */
function getImageVersion(): string | null {
  const image: string = process.env.DOCKER_IMAGE || '';
  return (
    process.env.DD_VERSION ||
    process.env.DOCKER_IMAGE_VERSION ||
    (image ? image.slice(image.lastIndexOf(':') + 1) : null)
  );
}

export { getImageVersion };
