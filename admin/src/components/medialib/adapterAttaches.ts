interface MediaLibAdapterConfig {
  mediaLibAttachesToggleFunc?: (index: number) => void;
}

interface MediaLibToolbox {
  title: string;
  icon: string;
}

export class MediaLibAttachesAdapter {
  private api: any;
  private config: MediaLibAdapterConfig;

  static get toolbox(): MediaLibToolbox {
    return {
      title: 'Attachment',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.3236 8.43554L9.49533 12.1908C9.13119 12.5505 8.93118 13.043 8.9393 13.5598C8.94741 14.0767 9.163 14.5757 9.53862 14.947C9.91424 15.3182 10.4191 15.5314 10.9422 15.5397C11.4653 15.5479 11.9637 15.3504 12.3279 14.9908L16.1562 11.2355C16.8845 10.5161 17.2845 9.53123 17.2682 8.4975C17.252 7.46376 16.8208 6.46583 16.0696 5.72324C15.3184 4.98066 14.3086 4.55425 13.2624 4.53782C12.2162 4.52138 11.2193 4.91627 10.4911 5.63562L6.66277 9.39093C5.57035 10.4699 4.97032 11.9473 4.99467 13.4979C5.01903 15.0485 5.66578 16.5454 6.79264 17.6592C7.9195 18.7731 9.43417 19.4127 11.0034 19.4374C12.5727 19.462 14.068 18.8697 15.1604 17.7907L18.9887 14.0354"></path></svg>',
    };
  }

  constructor({ api, config }: { api: any; config?: MediaLibAdapterConfig }) {
    this.api = api;
    this.config = config || {};
  }

  render(): HTMLElement {
    const currentIndex = this.api.blocks.getCurrentBlockIndex();

    if (this.config.mediaLibAttachesToggleFunc) {
      this.config.mediaLibAttachesToggleFunc(currentIndex);
    }

    return document.createElement('p');
  }

  save(): { name: string } {
    return {
      name: 'mediaLibraryAttachesStrapi',
    };
  }
}
