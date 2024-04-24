const INIT_STATE = {
  Speaker: {
    title: "Speaker",
    imageUrl:
      "https://res.cloudinary.com/vaishnavitiwari028/image/upload/v1601534107/images/Balance_her_natural_oak_fckiw4.webp",
    size: "large",
    id: 2,
    linkUrl: "shop/speakers",
  },
  Headphones: {
    title: "Headphones",
    imageUrl:
      "https://res.cloudinary.com/vaishnavitiwari028/image/upload/v1601534108/images/h9-anthracite_CMS_CT1_xeqxqy.webp",
    size: "large",
    id: 3,
    linkUrl: "shop/headphones",
  },
  Earplugs: {
    title: "Earplugs",
    imageUrl:
      "https://res.cloudinary.com/vaishnavitiwari028/image/upload/v1601534108/images/earfins_e6_ywhxqz.webp",
    size: "large",
    id: 4,
    linkUrl: "shop/earphones",
  },
};

const directoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
