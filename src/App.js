import React, { Component } from 'react';
import Searchbar from './Components/Searchbar/searchbar';
import * as imagesApi from './services/image-api';
import ImageGallery from './Components/ImageGallery/imageGallery';
import Button from './Components/Button/button';
import GalleryLoader from './Components/Loader/loader';
import Modal from './Components/Modal/Modal';
import styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    currentPageImages: [],
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    url: '',
    tag: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
      url: '',
      tag: '',
    });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };
    this.setState({ isLoading: true });
    imagesApi
      .fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
          currentPageImages: [...images],
        }));
        if (images.length === 0) {
          this.setState({
            error: 'Nothing was find by your query. Try again.',
          });
        }
      })
      .then(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };


  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
        this.scrollDown();
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

 

  scrollDown = () => {
    window.scrollTo(0, 10000)
  };

  handleImageClick = ({ target }) => {
    if (target.nodeName !== 'IMG') {
      return;
    }
    const { url } = target.dataset;
    const tag = target.alt;
    this.setState({
      url,
      tag,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, isLoading, showModal, url, tag } = this.state;
    const LoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div className={styles.Container}>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} onClick={this.handleImageClick} />
        {isLoading && <GalleryLoader />}
        {LoadMoreButton && <Button onClick={this.fetchImages} />}
        {showModal && (
        <Modal onClose={this.toggleModal} onClick={this.handleImageClick}>
            <img src={url} alt={tag} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;