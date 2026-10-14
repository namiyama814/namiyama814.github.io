# namiyama

自分自身をライブラリのようにドキュメント化した個人サイトです。VitePressの標準テーマを使い、**Get Started / Guide / Reference** の構成で経歴、制作物、OSSへの貢献などを公開しています。

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

`pnpm format`で整形できます。ブラウザテストはお問い合わせフォームを送信しません。

## ページ

| 内容 | 日本語 | 英語 |
| --- | --- | --- |
| ホーム | `/` | `/en/` |
| Get Started | `/get-started` | `/en/get-started` |
| Overview | `/about` | `/en/about` |
| Development | `/development` | `/en/development` |
| Activities | `/activities` | `/en/activities` |
| Projects | `/works` | `/en/works` |
| Open Source | `/oss` | `/en/oss` |
| Contact | `/contact` | `/en/contact` |

アクセスしたURLの言語を表示します。言語メニューは対応するページへ移動します。地域判定APIや自動転送はありません。

旧ホームの`#about`、`#skills`、`#career`は、それぞれOverview、技術スタック、Activitiesへクライアント側で誘導します。

## 内容の更新

- `docs/index.md`と`docs/en/index.md`の`hero`設定でトップの紹介文を編集します。
- 自己紹介は`docs/about.md`、開発の経緯は`docs/development.md`で管理します。
- 活動履歴は`docs/activities.md`、OSS貢献記録は`docs/oss.md`です。
- 制作物は`docs/.vitepress/data/works.ts`で管理します。固定IDは公開アンカーとして使うため、作品名を変更しても維持してください。
- Projectsページの`<!-- works:ja -->`と`<!-- works:en -->`は共通データからビルド時にMarkdownへ展開されます。検索・目次・静的HTMLに全作品が含まれます。
- SNSは`docs/.vitepress/data/socials.ts`で管理します。
- サイドバー・ナビゲーションは`docs/.vitepress/config.ts`の`theme()`で定義します。

**新しい内容は日本語・英語の両方に反映してください。** 人物の性格・動機・成果を推測で付け加えず、所属と実際の制作物を混同しないでください。OSSのPR件数・マージ状況など日付のある情報は、更新時に再確認します。

## お問い合わせ

フォームの送信先は`https://formspree.io/f/xgawlzep`です。名前、メールアドレス、メッセージを必須にしています。通知設定はFormspreeで管理します。

## 公開

GitHub Pagesの公開元を **GitHub Actions** に設定します。mainブランチへのpushまたは手動実行で、`.github/workflows/pages.yml`がビルドし、`docs/.vitepress/dist`を公開します。

ルートドメイン`https://namiyama814.github.io`で公開するため、baseは`/`です。既存の`/about`、`/activities`、`/works`、`/contact`と英語版のURLを維持しています。

テーマとレイアウトの方針は[DESIGN.md](DESIGN.md)にまとめています。
