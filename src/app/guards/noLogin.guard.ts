import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const noLoginGuard = () => {
    const token = localStorage.getItem('token');

    if (token) {
      return false;
    }
    return true;
}
