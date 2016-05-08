import {Injectable} from 'angular2/core';

@Injectable()
export class RolesService {
    getRoles() {
        var config = new Config();
        var urls = [config.apiBaseUrl + "Roles"];
        return Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
    }
}