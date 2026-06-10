"use client";

import { useActionState } from "react";
import { Loader2, Lock } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { loginAction } from "./actions";

/** Client form for the admin password gate, backed by a server action. */
export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <form action={formAction} className="mt-6 flex flex-col gap-4">
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="••••••••"
        required
        autoFocus
        error={state?.error}
      />

      <Button type="submit" size="lg" disabled={isPending} className="w-full">
        {isPending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Verifying...
          </>
        ) : (
          <>
            <Lock className="h-4 w-4" />
            Sign In
          </>
        )}
      </Button>
    </form>
  );
}
