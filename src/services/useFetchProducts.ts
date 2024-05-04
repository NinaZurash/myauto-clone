"use client";

import { useMutation } from "@tanstack/react-query";
import { useToast } from "../components/ui/use-toast";
import { SITE_ROUTES } from "@/routes/site_routes";

export function useFetchProducts() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (payload: {
      sortOrder: number;
      periodFilter: string;
      manFilter: string;
      catFilter: string;
    }) => {
      const response = await fetch(
        `${SITE_ROUTES.base}/api/products?SortOrder=${payload.sortOrder}&Period=${payload.periodFilter}&Mans=${payload.manFilter}&Cats=${payload.catFilter}`
      );

      return response.json();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "There was a problem with your request.",
      });
    },
  });
}
