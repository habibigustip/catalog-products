import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { IMG_PRODUCT_LIST } from "@/shared/constant/image";
import { Star } from "@/assets/icon";
import { type IProducts } from "@/interfaces/products";

export default defineComponent({
    name: "Product",
    components: {
        AppHeader,
        AppFooter,
        Star,
    },
    async setup() {
        const router = useRouter();
        const runtimeConfig = useRuntimeConfig();
        const livingRoom = IMG_PRODUCT_LIST.BANNER_TOP_LIVING_ROOM;

        const { data: productList } = await useFetch<IProducts[]>(`${runtimeConfig.public.baseUrl}/products`);

        const onClickDetailPage = (product: IProducts) => {
            router.push(`product/${product.id}`);
        }

        return {
            livingRoom,
            productList,
            onClickDetailPage,
        }
    },
  })