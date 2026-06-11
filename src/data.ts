export interface GalleryItem {
  id: number;
  url: string;
  alt: string;
}

export interface Review {
  id: number;
  author: string;
  quote: string;
  rating: number;
}

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 1,
    url: "https://i.ibb.co/RkS3p6Qw/481169451-1067753541821785-8494826191059842830-n.jpg",
    alt: "Męska fryzura - precyzyjne cięcie i stylizacja boczna"
  },
  {
    id: 2,
    url: "https://i.ibb.co/3Yy85KnJ/481265379-1067753615155111-3107551582215182421-n.jpg",
    alt: "Klasyczne strzyżenie męskie z gładkim przejściem typu fade"
  },
  {
    id: 3,
    url: "https://i.ibb.co/TC2jLq9/480540742-1067755318488274-5113503273625224140-n.jpg",
    alt: "Warsztatowa stylizacja męska - precyzyjne wykończenie i kontur boczny"
  },
  {
    id: 4,
    url: "https://i.ibb.co/4RKVY6f1/554076883-1231363652127439-8730248422082881152-n.jpg",
    alt: "Ekskluzywne strzyżenie męskie wykonane przez Roberta Rutkowskiego"
  },
  {
    id: 5,
    url: "https://i.ibb.co/W4Q6QPWS/480787193-4024697997803689-8707315364019023430-n.jpg",
    alt: "Robert przy pracy - skupienie, rzemiosło i najwyższa dbałość o detale"
  },
  {
    id: 6,
    url: "https://i.ibb.co/j97szMpL/68271699-2409798379293667-1872392087907860480-n.jpg",
    alt: "Wykończenie klasycznej fryzury męskiej w Warsztacie w Sycowie"
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Zadowolony Klient",
    quote: "Robert klasa jak zawsze 👌",
    rating: 5
  }
];

export const CONTACT_INFO = {
  address: "ul. Ogrodowa 6A, 56-500 Syców",
  phone: "885 425 320",
  phoneDisplay: "885 425 320",
  facebookUrl: "https://www.facebook.com/profile.php?id=100057614463092",
  reviewsUrl: "https://www.facebook.com/profile.php?id=100057614463092&sk=reviews",
  aboutImg: "https://i.ibb.co/W4Q6QPWS/480787193-4024697997803689-8707315364019023430-n.jpg",
  heroImg: "https://i.ibb.co/j97szMpL/68271699-2409798379293667-1872392087907860480-n.jpg"
};
