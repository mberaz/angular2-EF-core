import {Injectable} from 'angular2/core';

@Injectable()
export class PeopleService {
    getPeople() {
        var config = new Config();
        var urls = [config.apiBaseUrl + "People"];
        return Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
    }

}