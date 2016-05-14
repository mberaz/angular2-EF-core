import {Injectable} from 'angular2/core';
import {Http, HTTP_BINDINGS, Headers, RequestOptions, Response} from "angular2/http";
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PeopleService {
    getPeople() {
        var config = new Config();
        var urls = [config.apiBaseUrl + "People"];
        return Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ))
    };

    getPerson(id: number) {
        var config = new Config();
        var url = config.apiBaseUrl + "People/" + id;
        return Promise.resolve(fetch(url).then(resp => resp.json()));
    };

    createPerson(data: string, http: Http) {
        var config = new Config();
        let headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });

        return http.post(config.apiBaseUrl + "People", data, options).toPromise();
    };


    updatePerson(data: string, http: Http) {
        var config = new Config();
        let headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });

        return http.put(config.apiBaseUrl + "People", data, options).toPromise();
    };

}