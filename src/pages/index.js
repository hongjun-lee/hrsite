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
        支持布署在Linux、Windows、MacOS及国产操作系统在内的多种操作系统下面。同时支持电脑、Pad、手机等多终端操作。帮助企业节约布署成本，应对可能到来的各种挑战。
      </>
    ),
  },
  {
    title: '集团管控权限体系',
    imageUrl: 'img/undraw_work_together_h63l.svg',
    description: (
      <>
        系统支持用户、角色、岗位组合权限管理，支持多层组织架构，数据从底层安全隔离，满足 <code>集团管控</code> 必需的责权利分离的需要。
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
  {
    title: '助力管理全面提升',
    imageUrl: 'img/undraw_To_the_stars_qhyy.svg',
    description: (
      <>
        着力于员工全生命周期管理、目标是将人力资源部门转化为企业战略执行部门，除了解决业务自动化以外，强化了<code>人才管理</code>和<code>分析与洞察</code>功能。满足高层管理者、业务人员、员工等不同视角的个性需求。
      </>
    ),
  },
  {
    title: '微服务、模块化设计',
    imageUrl: 'img/undraw_product_teardown_elol.svg',
    description: (
      <>
        HTTP/REST API适用系统所有的应用程序功能，将系统的业务能力封装并对外提供服务，为实现与其他系统对接及协同办公提供了原生支持。包括与企业微信交互等。
      </>
    ),
  },
  {
    title: '响应业务流程优化',
    imageUrl: 'img/undraw_User_flow_re_bvfx.svg',
    description: (
      <>
        独立的、可重用的HTML5工作流设计器，拥有丰富的JavaScript API，支持用户可视化设计，方便用户按需定制业务流程，以适应管理变更需求。        
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
