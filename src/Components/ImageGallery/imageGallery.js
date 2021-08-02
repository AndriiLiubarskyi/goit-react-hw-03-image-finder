import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/imageGalleryItem';
import styles from '../ImageGallery/imageGallery.module.css';

const ImageGallery = ({ images, onClick }) => (
  <ul className={styles.ImageGallery} onClick={onClick}>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        tags={tags}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ImageGallery;