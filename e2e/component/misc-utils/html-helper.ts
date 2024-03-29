export class HtmlHelper {
    static readonly attributes: {
        accept: string;
        acceptCharset: string;
        accessKey: string;
        action: string;
        align: string;
        alt: string;
        async: string;
        autoComplete: string;
        autoFocus: string;
        autoPlay: string;
        bgColor: string;
        border: string;
        buffered: string;
        challenge: string;
        charset: string;
        checked: string;
        cite: string;
        class: string;
        code: string;
        codebase: string;
        color: string;
        cols: string;
        colspan: string;
        content: string;
        contentEditable: string;
        contextMenu: string;
        controls: string;
        coords: string;
        crossOrigin: string;
        data: string;
        datetime: string;
        defaultt: string;
        defer: string;
        dir: string;
        dirName: string;
        disabled: string;
        download: string;
        draggable: string;
        dropZone: string;
        enctype: string;
        for: string;
        form: string;
        formControlName: string;
        formAction: string;
        headers: string;
        height: string;
        hidden: string;
        high: string;
        href: string;
        hrefLang: string;
        httpEquiv: string;
        icon: string;
        id: string;
        integrity: string;
        isMap: string;
        itemProp: string;
        keyType: string;
        kind: string;
        label: string;
        lang: string;
        language: string;
        list: string;
        loop: string;
        low: string;
        manifest: string;
        max: string;
        maxLength: string;
        minLength: string;
        media: string;
        method: string;
        min: string;
        multiple: string;
        muted: string;
        name: string;
        novalidate: string;
        open: string;
        optimum: string;
        pattern: string;
        ping: string;
        placeholder: string;
        poster: string;
        preload: string;
        radioGroup: string;
        readonly: string;
        rel: string;
        required: string;
        reversed: string;
        rows: string;
        rowSpan: string;
        sandbox: string;
        scope: string;
        scoped: string;
        seamless: string;
        selected: string;
        shape: string;
        size: string;
        sizes: string;
        slot: string;
        span: string;
        spellCheck: string;
        src: string;
        srcDoc: string;
        srcLang: string;
        srcset: string;
        start: string;
        step: string;
        style: string;
        summary: string;
        tabIndex: string;
        target: string;
        title: string;
        type: string;
        useMap: string;
        value: string;
        width: string;
        wrap: string;
    };

    public static get attributeValues() {
        return {
            panelContent : 'channel-component__panel__content',
            firstDoc: 'large-6 columns docs-carousel__doc',
            uibTooltip: 'uib-tooltip',
            ngRepeat: 'ng-repeat',
            ariaExpanded: 'aria-expanded',
            dropdownMenu: 'dropdown menu',
            pagination: 'owl-pagination',
            firstTweetsTitle: 'first-tweets__title',
            emailThis: 'fa fa-envelope',
            linkedIn: 'fa fa-linkedin',
            twitter: 'fa fa-twitter',
            chatter: 'fa fa-comment',
            yammer: 'fa yammer-logo',
            relatedTweet: 'large-4 columns',
            firstTweetEntity: 'first-tweets__tweet-entity',
            twitterUserName: 'first-tweets__name',
            twitterUserAccount: 'first-tweets__source',
            firstTweetBorder: 'first-tweets__border',
            owlCarousel: 'owl-carousel owl-theme',
            dropdownSubMenu: 'dropdown-submenu',
            role: 'role',
            menuItem: 'menuitem',
            panelNoContent: 'panel__no-content',
            relatedEntities: 'doc-related-entities row',
            row: 'row',
            docSnippet: 'first-reads__doc-snippet',
            signIn: 'jqi-sign-in',
            navLogo: 'nav-logo',
            landingPage: 'jq-landing-page-controller',
            overlayModal: 'over-lay-modal',
            pickShareChannelItem: 'pick-table-item-share-channel',
            frLabel: 'fr-hd-label',
            sectionid: 'sectionid',
            chid: 'chid',
            headerBar: 'header-bar sticky',
            srchNewPanel: 'fr-srch-new-panel',
            iconSettings: 'icon icon-settings',
            chnlActions: 'jq-chnl-actions',
            seperator: 'jq-seperator',
            checkboxIcon: 'checkbox-icon',
            newName: 'jq-ch-new-name',
            sucMsg: 'jq-suc-msg',
            buttons: 'buttons',
            addCompList: 'jq-addComp-list',
            compName: 'jq-comp-name',
            streamCheckboxIcon: 'jq-stream-chk checkbox-icon',
            summaryCheckboxIcon: 'jq-summ-chk checkbox-icon',
            channelName: 'jq-chn-name',
            parentCheckbox: 'parent-chbox',
            lhsArrow: 'fr-lhs-arrow',
            arrowUp: 'fr-lhs-arrow-top icon-orion-arrow-up',
            hdLabel: 'fr-hd-label',
            removeChannelPopup: 'jq-rem-chnl-popup',
            chevronLeft: 'fa fa-chevron-left',
        };
    }

    public static get tags() {
        return {
            listItem: 'li',
            icon: 'i',
            textarea: 'textarea',
            anchor: 'a',
            paragraph: 'p',
            unorderedList: 'ul',
            abbr: 'abbr',
            acronym: 'acronym',
            address: 'address',
            applet: 'applet',
            area: 'area',
            article: 'article',
            aside: 'aside',
            audio: 'audio',
            b: 'b',
            base: 'base',
            baseFont: 'basefont',
            bdi: 'bdi',
            bdo: 'bdo',
            big: 'big',
            blockQuote: 'blockquote',
            body: 'body',
            br: 'br',
            button: 'button',
            canvas: 'canvas',
            caption: 'caption',
            center: 'center',
            cite: 'cite',
            code: 'code',
            col: 'col',
            colGroup: 'colgroup',
            command: 'command',
            dataList: 'datalist',
            dd: 'dd',
            del: 'del',
            details: 'details',
            dfn: 'dfn',
            dir: 'dir',
            div: 'div',
            dl: 'dl',
            dt: 'dt',
            em: 'em',
            embed: 'embed',
            fieldSet: 'fieldset',
            figCaption: 'figcaption',
            figure: 'figure',
            font: 'font',
            footer: 'footer',
            form: 'form',
            frame: 'frame',
            frameSet: 'frameset',
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            h4: 'h4',
            h5: 'h5',
            h6: 'h6',
            head: 'head',
            header: 'header',
            hGroup: 'hgroup',
            hr: 'hr',
            html: 'html',
            i: 'i',
            iFrame: 'iframe',
            img: 'img',
            input: 'input',
            ins: 'ins',
            item: 'item',
            itemId: 'itemid',
            kbd: 'kbd',
            keyGen: 'keygen',
            label: 'label',
            legend: 'legend',
            li: 'li',
            link: 'link',
            map: 'map',
            mark: 'mark',
            menu: 'menu',
            meta: 'meta',
            meter: 'meter',
            nav: 'nav',
            noFrames: 'noframes',
            noScript: 'noscript',
            object: 'object',
            ol: 'ol',
            optGroup: 'optgroup',
            option: 'option',
            output: 'output',
            p: 'p',
            param: 'param',
            pre: 'pre',
            progress: 'progress',
            q: 'q',
            rp: 'rp',
            rt: 'rt',
            ruby: 'ruby',
            s: 's',
            sAmp: 'samp',
            script: 'script',
            section: 'section',
            select: 'select',
            small: 'small',
            source: 'source',
            span: 'span',
            strike: 'strike',
            strong: 'strong',
            style: 'style',
            sub: 'sub',
            summary: 'summary',
            sup: 'sup',
            table: 'table',
            tBody: 'tbody',
            td: 'td',
            textArea: 'textarea',
            tFoot: 'tfoot',
            th: 'th',
            tHead: 'thead',
            time: 'time',
            title: 'title',
            tr: 'tr',
            track: 'track',
            tt: 'tt',
            u: 'u',
            ul: 'ul',
            var: 'var',
            video: 'video',
            wbr: 'wbr',
            searchToken: 'searchtoken',
            token: '_token',
            underscoreType: '_type',
            val: 'val',
            ngModel: 'ng-model',
        };
    }
}
