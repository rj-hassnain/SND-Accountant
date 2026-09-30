import {
  ArrowRight,
  ArrowUpRight,
  BadgePoundSterling,
  BookOpenCheck,
  BriefcaseBusiness,
  ClipboardList,
  FileChartColumnIncreasing,
  FileText,
  Landmark,
  UsersRound,
} from 'lucide-react';
import { Link } from 'wouter';

const categories = [
  {
    id: 'accounts-tax',
    number: '01 / Accounts & tax',
    title: 'Stay on top of the numbers and the rules.',
    description: 'Clear support with core accounting and tax responsibilities, with advice shaped around your circumstances.',
    items: [
      { id: 'company-accounts', title: 'Company accounts', description: 'Support across the whole process, from bookkeeping through to final accounts.', icon: FileText },
      { id: 'personal-tax', title: 'Personal tax & self-assessment', description: 'Help with a wide range of personal tax returns, including for landlords, the self-employed and directors.', icon: BadgePoundSterling },
      { id: 'corporation-tax', title: 'Corporation tax', description: 'Preparation of statutory accounts requirements and filing with HMRC.', icon: Landmark },
      { id: 'vat', title: 'VAT', description: 'Advice on VAT schemes, registration, de-registration and other VAT matters.', icon: ClipboardList },
      { id: 'tax-refunds', title: 'Tax refunds', description: 'If you think you may have paid too much tax, talk to SND about whether a refund may be due.', icon: BadgePoundSterling },
      { id: 'tax-planning', title: 'Tax planning', description: 'Support to protect your income while keeping up with current HMRC rules and regulations.', icon: FileChartColumnIncreasing },
      { id: 'capital-gains-tax', title: 'Capital Gains Tax', description: 'Discuss your Capital Gains Tax responsibilities and the support you may need.', icon: BadgePoundSterling },
      { id: 'cis', title: 'Construction Industry Scheme', description: 'Accounting and tax support for Construction Industry Scheme matters.', icon: BriefcaseBusiness },
      { id: 'making-tax-digital', title: 'Making Tax Digital', description: 'Guidance on Making Tax Digital and the changes it brings to your records and returns.', icon: ClipboardList },
    ],
  },
  {
    id: 'business-support',
    number: '02 / Business support',
    title: 'A useful sounding board for your business.',
    description: 'Practical help for running, growing or changing a business—whether you need regular reporting or a plan for what comes next.',
    items: [
      { id: 'bookkeeping', title: 'Bookkeeping', description: 'Professional bookkeeping tailored to your needs, freeing up time for other business priorities.', icon: BookOpenCheck },
      { id: 'payroll', title: 'Payroll', description: 'Payroll support for organisations of different sizes, including the demands of Real Time Information.', icon: UsersRound },
      { id: 'management-accounts', title: 'Management accounts', description: 'Customised reports, including monthly accounts to help you review how your business is performing.', icon: FileChartColumnIncreasing },
      { id: 'business-consultancy', title: 'Business consultancy', description: 'Advice on expansion strategies, marketing, raising finance, investment appraisal and systems.', icon: BriefcaseBusiness },
      { id: 'start-up-plans', title: 'Start-up business plans', description: 'Discuss your options and get a business plan tailored to the needs of your new venture.', icon: FileText },
      { id: 'business-start-ups', title: 'Business start-ups', description: 'Support for people preparing to start a business, including help to plan for the next steps.', icon: ArrowUpRight },
      { id: 'financial-forecasting', title: 'Financial forecasting', description: 'Forecasting support to help you consider your business finances and plans.', icon: FileChartColumnIncreasing },
      { id: 'brexit-planning', title: 'Brexit planning', description: 'Talk to SND about the accounting or business planning support you may need.', icon: FileText },
      { id: 'outsourcing', title: 'Outsourcing', description: 'Outsource selected work to free up time and give your business more flexibility.', icon: UsersRound },
    ],
  },
  {
    id: 'specialist',
    number: '03 / Specialist matters',
    title: 'Guidance when the detail gets complicated.',
    description: 'Support with specific obligations, enquiries and company services, including access to a professional-associate network where appropriate.',
    items: [
      { id: 'investigations-enquiries', title: 'Investigations, enquiries & disclosures', description: 'Contact SND to discuss support with an investigation, enquiry or disclosure.', icon: FileText },
      { id: 'workplace-pensions', title: 'Workplace pensions', description: 'Support with workplace pension responsibilities as part of your business services.', icon: UsersRound },
      { id: 'company-formations', title: 'Company formations', description: 'Company formation services are available through SND’s professional-associate network.', icon: BriefcaseBusiness },
      { id: 'virtual-office', title: 'Virtual-office services', description: 'Virtual-office support is available through SND’s professional-associate network.', icon: FileChartColumnIncreasing },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-wide page-hero-grid">
          <div>
            <span className="eyebrow">Services</span>
          <h1 className="display">Practical support<br />for the full picture.</h1>
            <p>From everyday bookkeeping to specialist tax matters, SND offers accounting and business support for individuals and organisations across the North West.</p>
          </div>
          <div className="page-hero-mark" aria-hidden="true"><FileChartColumnIncreasing size={43} strokeWidth={1.2} /></div>
        </div>
      </section>
      <section className="service-catalog">
        <div className="container-wide">
          {categories.map((category) => (
            <section className="catalog-section" key={category.id} id={category.id}>
              <div className="catalog-top">
                <span className="catalog-index">{category.number}</span>
                <div><h2 className="display">{category.title}</h2><p>{category.description}</p></div>
              </div>
              <div className="catalog-grid">
                {category.items.map((service) => {
                  const Icon = service.icon;
                  return (
                    <article className="catalog-card" key={service.id} data-testid={`card-service-${service.id}`}>
                      <span className="catalog-card-icon"><Icon size={19} strokeWidth={1.6} /></span>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <Link href="/contact" className="catalog-card-link" aria-label={`Learn more about ${service.title}`} data-testid={`link-service-${service.id}`}>
                        Learn more <ArrowRight size={14} />
                      </Link>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className="services-close">
        <div className="container-wide close-inner">
          <div><span className="eyebrow">Not sure where to begin?</span><h2 className="display">Let’s work out what support makes sense for you.</h2></div>
          <Link href="/contact" className="button-primary" data-testid="link-services-consultation">Book a consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}