class Menu {
  private menuBtn: HTMLDivElement;
  private menu: HTMLElement;
  private menuNav: HTMLUListElement;
  private menuBranding: HTMLDivElement;
  private navItems: HTMLLIElement[];

  private static instance: Menu;

  public static get Instance() {
    if (!this.instance) {
      this.instance = new Menu();
    }
    return this.instance;
  }

  private constructor() {
    // Select DOM Items
    this.menuBtn = document.querySelector('.menu-btn') as HTMLDivElement;
    this.menu = document.querySelector('.menu') as HTMLElement;
    this.menuNav = document.querySelector('.menu-nav') as HTMLUListElement;
    this.menuBranding = document.querySelector(
      '.menu-branding'
    ) as HTMLDivElement;
    this.navItems = Array.from(
      document.querySelectorAll('.nav-item')
    ) as HTMLLIElement[];

    this.addClickEventListener();
  }

  private addClickEventListener() {
    // Set Initial State Of Menu
    let showMenu = false;

    this.menuBtn.addEventListener('click', () => {
      if (!showMenu) {
        this.menuBtn.classList.add('close');
        this.menu.classList.add('show');
        this.menuNav.classList.add('show');
        this.menuBranding.classList.add('show');
        this.navItems.forEach((item) => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
      } else {
        this.menuBtn.classList.remove('close');
        this.menu.classList.remove('show');
        this.menuNav.classList.remove('show');
        this.menuBranding.classList.remove('show');
        this.navItems.forEach((item) => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
      }
    });
  }
}

Menu.Instance;
