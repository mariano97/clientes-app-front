import http from './http-commons.services';

export class AsesorService {
    getAll() {
        return http.get('/Asesor');
    }
}