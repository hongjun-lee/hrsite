import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '多平台部署、多终端使用',
    imageUrl: 'img/undraw_server_cluster_jwwq.svg',
    description: (
      <>
        系统支持布署在Linux、Windows、MacOS等多种操作系统下面，同时支持电脑、Pad、手机等终端操作。帮助企业节约成本，应对可能到来的各种挑战。
      </>
    ),
  },
  {
    title: '完善的权限体系模型',
    imageUrl: 'img/undraw_work_together_h63l.svg',
    description: (
      <>
        系统支持角色、用户、多租户管理，支持任意多层组织架构，数据底层隔离，满足 <code>集团管控</code> 必需的责权利分离的需要。
      </>
    ),
  },
  {
    title: '增强的分析和洞察能力',
    imageUrl: 'img/undraw_dashboard_nklg.svg',
    description: (
      <>
        将从业务中提炼出的统计和分析模型，制作成小部件显示在智能仪表页上，并且支持下钻式查询，帮助管理者提升对全局的实时掌控能力。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              开始了解
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
