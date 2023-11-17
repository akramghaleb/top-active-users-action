let headerComponent = function () {
    let create = function (pageTitle, country) {
        let markdown = ``;
        if(pageTitle === undefined && country === undefined){
            markdown = markdown + `# Top GitHub Users By Country `;
            markdown = markdown + `[<img alt="Image of insights" src="https://github.com/akramghaleb/insights/blob/master/graph/373383893/small/week.png" height="24">](https://github.com/akramghaleb/insights/blob/master/readme/373383893/week.md)\n`
            markdown = markdown + `[![Top GitHub Users](https://github.com/akramghaleb/top-active-users/actions/workflows/action.yml/badge.svg)](https://github.com/akramghaleb/top-active-users/actions/workflows/action.yml) `;
            markdown = markdown + `[![Image of insights](https://github.com/akramghaleb/insights/blob/master/svg/373383893/badge.svg)](https://github.com/akramghaleb/insights/blob/master/readme/373383893/week.md)\n\n`;
        } else {
            markdown = markdown + `# Top GitHub Users By ${pageTitle} in ${country} `;
            markdown = markdown + `[<img alt="Image of insights" src="https://github.com/akramghaleb/insights/blob/master/graph/373383893/small/week.png" height="24">](https://github.com/akramghaleb/insights/blob/master/readme/373383893/week.md)\n`
            markdown = markdown + `[![Top GitHub Users](https://github.com/akramghaleb/top-active-users/actions/workflows/action.yml/badge.svg)](https://github.com/akramghaleb/top-active-users/actions/workflows/action.yml) `;
            markdown = markdown + `[![Image of insights](https://github.com/akramghaleb/insights/blob/master/svg/373383893/badge.svg)](https://github.com/akramghaleb/insights/blob/master/readme/373383893/week.md)\n\n`;
        }
        return markdown;
    }
    return {
        create: create,
    };
}();
module.exports = headerComponent;