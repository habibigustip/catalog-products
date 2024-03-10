import AppFooter from "@/components/AppFooter.vue";
import { type IProducts } from "@/interfaces/products";

export default defineComponent({
    name: "Product",
    components: {
      AppFooter,
    },
    async setup() {
        const route = useRoute();
        const runtimeConfig = useRuntimeConfig();
        const slideIndex = ref(1);

        onMounted(() => {
          showSlides(slideIndex.value);
        })

        const { data: productDetail } = await useFetch<IProducts>(`${runtimeConfig.public.baseUrl}/products/${route.params?.productId}`);

        // Next/previous controls
        const plusSlides = (n: number) => {
          showSlides(slideIndex.value += n);
        }

        // Thumbnail image controls
        const currentSlide = (n: number) => {
          showSlides(slideIndex.value = n);
        }

        const showSlides = (n: number) => {
          let i;
          let slides = document.getElementsByClassName("img-preview-slides");
          let dots = document.getElementsByClassName("demo");
          if (n > slides.length) {slideIndex.value = 1}
          if (n < 1) {slideIndex.value = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex.value-1].style.display = "block";
          dots[slideIndex.value-1].className += " active";
        }

        return {
          productDetail,
          plusSlides,
          currentSlide,
        }
    },
  })