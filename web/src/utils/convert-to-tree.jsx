export default function convertToTree(data) {
    const root = data.filter( ({parent}) => {
        return parent === null;
    });

    const children = data.filter( ({parent}) => {
        return parent !== null;
    });

    const tree = [
        root,
        []
    ];

    while(children.length !== 0) {
        for (let i = 0; i < children.length; i++) {
            const index = tree[tree.length - 2]
                .findIndex(subject => subject.id === children[i].parent.id);

            
            if (index === -1) {
                continue;
            }

            tree[tree.length - 1].push(children[i]);
            
            children.splice(i, 1);
            i--;
        }

        if (children.length !== 0) {
            tree.push([]);
        }
    }

    while (tree.length !== 1) {
        for (let i = 0; i < tree[tree.length - 1].length; i++) {
            const index = tree[tree.length - 2]
                .findIndex(subject => subject.id === tree[tree.length - 1][i].parent.id);

            if (!tree[tree.length - 2][index].children) {
                tree[tree.length - 2][index].children = [];
            }

            tree[tree.length - 2][index].children.push(tree[tree.length - 1][i]);
        }

        if (tree.length !== 1) {
            tree.pop();
        }
    }

    return tree[0];
};
