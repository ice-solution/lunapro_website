// 臨時的 tRPC 客戶端模擬
// 如果沒有後端，可以暫時使用這個模擬版本

import productsData from "@/data/products.json";
import categoriesData from "@/data/categories.json";

export const trpc = {
  products: {
    list: {
      useQuery: () => ({
        data: productsData,
        isLoading: false,
      }),
    },
    getCategories: {
      useQuery: () => ({
        data: categoriesData,
      }),
    },
    getById: {
      useQuery: ({ id }: { id: string }) => {
        const product = productsData.find((p: any) => p.id === id);
        return {
          data: product || null,
          isLoading: false,
        };
      },
    },
  },
  inquiries: {
    submit: {
      useMutation: (options?: {
        onSuccess?: () => void;
        onError?: (error: any) => void;
      }) => ({
        mutate: (data: any) => {
          console.log("Mock submit inquiry:", data);
          options?.onSuccess?.();
        },
      }),
    },
  },
  auth: {
    logout: {
      useMutation: (options?: { onSuccess?: () => void }) => ({
        mutate: () => {
          console.log("Mock logout");
          options?.onSuccess?.();
        },
      }),
    },
  },
};
