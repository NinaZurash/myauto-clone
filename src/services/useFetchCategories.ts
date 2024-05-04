"use client";

import { useMutation } from "@tanstack/react-query";
import { useToast } from "../components/ui/use-toast";
import { SITE_ROUTES } from "@/routes/site_routes";

export function useFetchCategories() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async () => {
      const response = await fetch(`${SITE_ROUTES.base}/api/categories`);
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
