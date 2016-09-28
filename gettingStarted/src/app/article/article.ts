import {Component} from '@angular/core';
import {Article} from '../class/article<object'

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    templateUrl: './article.html'
})
export class ArticleComponent {
    article: Article;
    voteUp(): boolean {
        this.article.voteUp();
        return false;
    }
    voteDown(): boolean {
        this.article.voteDown();
        return false;
    }
}


