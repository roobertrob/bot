import { BreadcrumbProps } from './types';

const Breadcrumb = ({ items, navigateTo }: BreadcrumbProps) => {
  const navigation = (uri?: string) => navigateTo && uri && navigateTo(uri);
  return (
    <div
      data-testid="breadcrumb-component"
      className="rounded-lg bg-white h-[4.0625rem] flex items-center p-6 space-x-2"
    >
      <nav>
        <ol className="flex items-center">
          {items.map((item, index, all) => (
            <li key={item.link}>
              <div className="flex items-center">
                {all.length === 1 ||
                (all.length !== 1 && index === all.length - 1) ? (
                  <span
                    aria-current="page"
                    className={`${
                      all.length === 1 ? '' : 'ml-4'
                    } ${'text-greenLight'}`}
                    data-testid="breadcrumb-last-item"
                  >
                    <p className="space-x-3">{item.children}</p>
                  </span>
                ) : (
                  <>
                    <button
                      role="link"
                      type="button"
                      onClick={() => navigation(item.link)}
                      className={`${
                        index === 0 ? 'mr-4' : 'mx-4'
                      } ${'font-bold text-body1'}`}
                      data-testid={
                        index === 0
                          ? 'breadcrumb-first-item'
                          : 'breadcrumb-item'
                      }
                    >
                      <p className="space-x-3 ">{item.children}</p>
                    </button>
                    <span
                      aria-hidden
                      className="before:content-['&bull;'] text-font-color-disabled"
                    >
                      /
                    </span>
                  </>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};
export { Breadcrumb };
