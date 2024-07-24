interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  description:'running life',
  siteUrl: 'https://running.xiaolongge.online',
  logo: 'https://avatars.githubusercontent.com/u/30064467?v=4',
  navLinks: [
    {
      name: 'git',
      url: 'https://github.com/xiaolonggee/running_page',
    }
  ],
};

export default data;
