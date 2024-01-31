import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const loginGuard = () => {
    const token = localStorage.getItem('token');

    const router = inject(Router);

    if (!token) {
      router.navigate(['/login']);
      return false;
    }
    return true;
}
