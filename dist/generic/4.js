class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
//* Приклад використання:
const pageProps = { title: 'test, work 👍🏼' };
const myPage = new Page(pageProps);
myPage.pageInfo();
export {};
//# sourceMappingURL=4.js.map