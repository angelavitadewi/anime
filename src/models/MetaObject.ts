export default class MetaObject {
  private perPage: number;
  private page: number;
  private search?: string;

  constructor(input: { perPage?: number; page?: number; search?: string } = {}) {
    this.perPage = input.perPage || 0;
    this.page = input.page || 0;
    this.search = input.search || '';
  }

  public setPerPage(perPage: number) {
    this.perPage = perPage;
    return this;
  }

  public setPage(page: number) {
    this.page = page;
    return this;
  }

  public setSearch(search: string) {
    this.search = search;
    return this;
  }

  public clone() {
    return new MetaObject({
      perPage: this.perPage,
      page: this.page,
      search: this.search,
    });
  }

  public get() {
    return {
      perPage: this.perPage,
      page: this.page,
      search: this.search,
    };
  }
}
