interface MediaLibAdapterConfig {
  mediaLibToggleFunc?: (index: number) => void;
}

interface MediaLibToolbox {
  title: string;
  icon: string;
}

export class MediaLibAdapter {
  private api: any;
  private config: MediaLibAdapterConfig;

  static get toolbox(): MediaLibToolbox {
    return {
      title: 'Image',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"></rect><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"></path></svg>',
    };
  }

  constructor({ api, config }: { api: any; config?: MediaLibAdapterConfig }) {
    this.api = api;
    this.config = config || {};
  }

  render(): HTMLElement {
    const currentIndex = this.api.blocks.getCurrentBlockIndex();

    if (this.config.mediaLibToggleFunc) {
      this.config.mediaLibToggleFunc(currentIndex);
    }

    return document.createElement('p');
  }

  save(): { name: string } {
    return {
      name: 'mediaLibraryStrapi',
    };
  }
}
