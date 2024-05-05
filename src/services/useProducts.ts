"use client";

import { useMutation } from "@tanstack/react-query";

import { SITE_ROUTES } from "@/routes/site_routes";

import { useToast } from "../components/ui/use-toast";

export function useProducts() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (payload: {
      sortOrder: number;
      periodFilter: string;
      manFilter: string;
      catFilter: string;
      forRent: number;
      priceFromTo: [number | "", number | ""];
    }) => {
      const response = await fetch(
        `${SITE_ROUTES.base}/api/products?SortOrder=${payload.sortOrder}&Period=${payload.periodFilter}&Mans=${payload.manFilter}&Cats=${payload.catFilter}&ForRent=${payload.forRent}&PriceFrom=${payload.priceFromTo[0]}&PriceTo=${payload.priceFromTo[1]}`,
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
