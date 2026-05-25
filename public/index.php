<?php
$contentPath = __DIR__ . '/content/home.json';
$content = json_decode(file_get_contents($contentPath), true);
if (!is_array($content)) {
    http_response_code(500);
    exit('Content is unavailable');
}

function e($value) {
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}
?>
<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= e($content['meta']['title']) ?></title>
  <meta name="description" content="<?= e($content['meta']['description']) ?>">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
  <header class="site-header">
    <a class="brand" href="./">CMS Page</a>
    <nav aria-label="Primary navigation">
      <a href="#sections">Sections</a>
      <a href="#process">Process</a>
      <a href="#performance">Performance</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero__content">
        <p class="eyebrow"><?= e($content['hero']['eyebrow']) ?></p>
        <h1><?= e($content['hero']['title']) ?></h1>
        <p class="lead"><?= e($content['hero']['lead']) ?></p>
        <div class="actions">
          <a class="button button--primary" href="#sections"><?= e($content['hero']['primaryCta']) ?></a>
          <a class="button" href="#performance"><?= e($content['hero']['secondaryCta']) ?></a>
        </div>
      </div>
    </section>

    <section id="sections" class="section">
      <div class="section__heading">
        <p class="eyebrow">Implementation</p>
        <h2>CMS-managed building blocks</h2>
      </div>
      <div class="feature-grid">
        <?php foreach ($content['features'] as $feature): ?>
          <article class="feature-card">
            <h3><?= e($feature['title']) ?></h3>
            <p><?= e($feature['text']) ?></p>
          </article>
        <?php endforeach; ?>
      </div>
    </section>

    <section class="stats" aria-label="Project stats">
      <?php foreach ($content['stats'] as $stat): ?>
        <div>
          <strong><?= e($stat['value']) ?></strong>
          <span><?= e($stat['label']) ?></span>
        </div>
      <?php endforeach; ?>
    </section>

    <section id="process" class="section section--split">
      <div>
        <p class="eyebrow">Workflow</p>
        <h2>From design to editable CMS page</h2>
      </div>
      <ol class="process-list">
        <?php foreach ($content['process'] as $item): ?>
          <li><?= e($item) ?></li>
        <?php endforeach; ?>
      </ol>
    </section>

    <section id="performance" class="performance">
      <p class="eyebrow">Optimization</p>
      <h2>Fast by default</h2>
      <p>Страница использует системные шрифты, локальный CSS, предсказуемые размеры блоков, семантическую разметку и минимум JavaScript. Такой подход снижает риск CLS, ускоряет первый рендер и упрощает перенос на Pico CMS, WordPress, Bitrix или другой бесплатный движок.</p>
    </section>
  </main>
</body>
</html>
