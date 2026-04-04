import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const isGithubApi = req.url.includes('api.github.com')

  if (isGithubApi) {
    return next(req)
  }

  const token = localStorage.getItem('logado') === 'true' ? 'token-fake-123' : null

  if (token) {
    const reqComToken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next(reqComToken)
  }

  return next(req)
}