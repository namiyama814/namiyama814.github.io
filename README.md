# namiyama

学生としての活動と、Webサービス・ツール・Botの制作記録をまとめた個人サイトです。VitePressの標準テーマを拡張し、トップは短い紹介、詳細ページはドキュメント形式にしています。

## 開発

Node.js 22以上とpnpm 10を使います。

```sh
pnpm install
pnpm dev
```

```sh
pnpm check       # 整形・lint・型検査・本番ビルド
pnpm preview     # 本番プレビュー
pnpm exec playwright install chromium
pnpm test        # 本番プレビューでのブラウザ検証
```

`pnpm format`で整形できます。ブラウザテストはフォームを送信しません。

## ページ

| 内容         | 日本語        | 英語             |
| ------------ | ------------- | ---------------- |
| ホーム       | `/`           | `/en/`           |
| 自己紹介     | `/about`      | `/en/about`      |
| 活動・経歴   | `/activities` | `/en/activities` |
| つくったもの | `/works`      | `/en/works`      |
| 連絡先       | `/contact`    | `/en/contact`    |

アクセスしたURLの言語を表示します。言語メニューは対応するページへ移動します。地域判定APIや自動転送はありません。

旧ホームの`#about`、`#skills`、`#career`は、それぞれ自己紹介、技術・ツール、活動・経歴へクライアント側で誘導します。

## 内容の更新

- `docs/index.md`と`docs/en/index.md`の`hero`設定で、トップの紹介文を編集します。
- `docs/about.md`と英語版に、興味や制作の動機などを追記できます。通常のMarkdown見出しを使えば目次と検索に反映されます。
- 活動・経歴は`docs/activities.md`と英語版を編集します。
- 作品は`docs/.vitepress/data/works.ts`で管理します。固定IDは公開アンカーに使うため、作品名を変更しても維持してください。
- 作品ページの`<!-- works:ja -->`と`<!-- works:en -->`は、共通データからビルド時にMarkdownへ展開されます。検索・目次・静的HTMLに全作品が含まれます。
- SNSは`docs/.vitepress/data/socials.ts`で管理します。

人物の性格や動機は推測で書かず、本人が提供した内容を掲載します。新しい内容は日本語と英語の両方に反映してください。

## お問い合わせ

フォームの送信先は`https://formspree.io/f/xgawlzep`です。名前、メールアドレス、メッセージを必須にしています。通知設定はFormspreeで管理します。

## 公開

GitHub Pagesの公開元を **GitHub Actions** に設定します。mainブランチへのpushまたは手動実行で、`.github/workflows/pages.yml`がビルドし、`docs/.vitepress/dist`を公開します。

ルートドメイン`https://namiyama814.github.io`で公開するため、baseは`/`です。既存の`/works`、`/contact`と英語版のURLを維持しています。

テーマとレイアウトの方針は[DESIGN.md](DESIGN.md)にまとめています。
