(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={Overlay:"modal_Overlay__2Gb_9",Modal:"modal_Modal__3ql8q"}},22:function(e,t,a){e.exports={ImageGalleryItem:"imageGalleryItem_ImageGalleryItem__1Qfjt",ImageGalleryItemImage:"imageGalleryItem_ImageGalleryItemImage__1lxjn"}},23:function(e,t,a){e.exports={ImageGallery:"imageGallery_ImageGallery__2vQ7Z"}},24:function(e,t,a){e.exports={LoadButton:"button_LoadButton__2X782"}},26:function(e,t,a){e.exports={Container:"App_Container__1C9xP"}},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),i=a(10),l=a(4),s=a(5),u=a(7),h=a(6),m=a(8),g=a.n(m),d=a(1),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{className:g.a.Searchbar,children:Object(d.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:g.a.SearchButton,children:Object(d.jsx)("span",{className:g.a.SearchButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:g.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),f=a(12),j=a.n(f);j.a.defaults.baseURL="https://pixabay.com/api/";var p=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n;return j.a.get("?q=".concat(a,"&page=").concat(r,"&key=").concat("21859794-b320bd39175c403fcfc8c4a95","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},y=a(22),v=a.n(y),O=function(e){var t=e.webformatURL,a=e.tags,n=e.largeImageURL;return Object(d.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(d.jsx)("img",{src:t,alt:a,"data-url":n})})},_=a(23),S=a.n(_),I=function(e){var t=e.images,a=e.onClick;return Object(d.jsx)("ul",{className:S.a.ImageGallery,onClick:a,children:t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,r=e.tags;return Object(d.jsx)(O,{webformatURL:a,tags:r,largeImageURL:n},t)}))})},x=a(24),w=a.n(x),C=function(e){var t=e.onClick;return Object(d.jsx)("button",{type:"button",onClick:t,className:w.a.LoadButton,children:"Load more"})},k=a(25),L=a.n(k),B=function(){return Object(d.jsx)(L.a,{type:"Rings",color:"#00BFFF",height:80,width:120})},G=a(13),M=a.n(G),P=document.querySelector("#modal"),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(d.jsx)("div",{className:M.a.Overlay,onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:M.a.Modal,children:this.props.children})}),P)}}]),a}(n.Component),Q=a(26),F=a.n(Q),q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,currentPageImages:[],searchQuery:"",isLoading:!1,error:null,showModal:!1,url:"",tag:""},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null,url:"",tag:""})},e.fetchImages=function(){var t=e.state,a={searchQuery:t.searchQuery,currentPage:t.currentPage};e.setState({isLoading:!0}),p(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1,currentPageImages:Object(i.a)(t)}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.handleImageClick=function(t){var a=t.target;if("IMG"===a.nodeName){var n=a.dataset.url,r=a.alt;e.setState({url:n,tag:r}),e.toggleModal()}},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.scrollWindow=function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1e3)},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages(),t.currentPage>1&&this.scrollWindow()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.showModal,r=e.url,c=e.tag,o=t.length>0&&!a;return Object(d.jsxs)("div",{className:F.a.Container,children:[Object(d.jsx)(b,{onSubmit:this.onChangeQuery}),Object(d.jsx)(I,{images:t,onClick:this.handleImageClick}),a&&Object(d.jsx)(B,{}),o&&Object(d.jsx)(C,{onClick:this.fetchImages}),n&&Object(d.jsx)(N,{onClose:this.toggleModal,onClick:this.handleImageClick,children:Object(d.jsx)("img",{src:r,alt:c})})]})}}]),a}(n.Component);a(70),a(71);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"searchbar_Searchbar__1vpgu",SearchForm:"searchbar_SearchForm__3yvVt",SearchButton:"searchbar_SearchButton__wSvOy",SearchButtonLabel:"searchbar_SearchButtonLabel__1viV9",SearchFormInput:"searchbar_SearchFormInput__2lPhe"}}},[[72,1,2]]]);
//# sourceMappingURL=main.6dc3dd15.chunk.js.map