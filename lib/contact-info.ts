export const contactInfo = {
  phone: "3193300235",
  phoneDisplay: "+57 319 330 0235",
  email: "macadamiatiendadebelleza@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61589084550276",
  tiktok: "https://www.tiktok.com/@macadamia_beuty?_r=1&_t=ZS-95yyOKt18vw",
  instagram: "https://www.instagram.com/macadamiatiendadebelleza/",
  whatsappUrl(message: string) {
    return `https://wa.me/57${this.phone}?text=${encodeURIComponent(message)}`;
  },
};
