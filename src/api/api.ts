/* eslint-disable */
/* tslint:disable */
/*
 * ------------------------------------------------------------------
 * # THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API-NEXTGEN     #
 * # AUTHORS: acacode & grandsilence                                #
 * # https://github.com/grandsilence/swagger-typescript-api-nextgen #
 * ------------------------------------------------------------------
 */

export namespace Company {
  /**
   * No description
   * @name UserDetail
   * @request GET:/company/user/{id}
   */
  export namespace UserDetail {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name CompanyList
   * @request GET:/company/
   */
  export namespace CompanyList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name CompanyCreate
   * @request POST:/company/
   */
  export namespace CompanyCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      name?: any;
      email?: any;
      phone?: any;
      pan?: any;
      gst?: any;
      cin?: any;
    };
    export type RequestHeaders = { userid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name CompanyDetail
   * @request GET:/company/{id}
   */
  export namespace CompanyDetail {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name CompanyUpdate
   * @request PUT:/company/{id}
   */
  export namespace CompanyUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = {
      name?: any;
      email?: any;
      phone?: any;
      pan?: any;
      gst?: any;
      cin?: any;
    };
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name CompanyDelete
   * @request DELETE:/company/{id}
   */
  export namespace CompanyDelete {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Gst {
  /**
   * No description
   * @name GetGst
   * @request GET:/gst/
   */
  export namespace GetGst {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name PostGst
   * @request POST:/gst/
   */
  export namespace PostGst {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = { name?: any; description?: any; tax?: any };
    export type RequestHeaders = { companyid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name GetGst2
   * @request GET:/gst/{id}
   * @originalName getGst
   * @duplicate
   */
  export namespace GetGst2 {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name PutGst
   * @request PUT:/gst/{id}
   */
  export namespace PutGst {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = { name?: any; description?: any; tax?: any };
    export type RequestHeaders = { companyid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name DeleteGst
   * @request DELETE:/gst/{id}
   */
  export namespace DeleteGst {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Product {
  /**
   * No description
   * @name ProductList
   * @request GET:/product/
   */
  export namespace ProductList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name ProductCreate
   * @request POST:/product/
   */
  export namespace ProductCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = { name?: any; description?: any; quantity?: any; direction?: any };
    export type RequestHeaders = { categoryid?: string; gstid?: string; companyid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name ProductDetail
   * @request GET:/product/{id}
   */
  export namespace ProductDetail {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name ProductUpdate
   * @request PUT:/product/{id}
   */
  export namespace ProductUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = { name?: any; description?: any };
    export type RequestHeaders = { categoryid?: string; gstid?: string; companyid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name ProductDelete
   * @request DELETE:/product/{id}
   */
  export namespace ProductDelete {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace User {
  /**
   * No description
   * @name UserList
   * @request GET:/user/
   */
  export namespace UserList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name UserCreate
   * @request POST:/user/
   */
  export namespace UserCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = { password?: any; email?: any; avatar?: any; name?: any };
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name UserUpdate
   * @request PUT:/user/{id}
   */
  export namespace UserUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = { email?: any; password?: any };
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name UserDelete
   * @request DELETE:/user/{id}
   */
  export namespace UserDelete {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Category {
  /**
   * No description
   * @name CategoryList
   * @request GET:/category/
   */
  export namespace CategoryList {
    export type RequestParams = {};
    export type RequestQuery = { parentId?: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name CategoryCreate
   * @request POST:/category/
   */
  export namespace CategoryCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = { name?: any };
    export type RequestHeaders = { parentid?: string; companyid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name CategoryDetail
   * @request GET:/category/{id}
   */
  export namespace CategoryDetail {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name CategoryUpdate
   * @request PUT:/category/{id}
   */
  export namespace CategoryUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = { name?: any };
    export type RequestHeaders = { companyid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name CategoryDelete
   * @request DELETE:/category/{id}
   */
  export namespace CategoryDelete {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Role {
  /**
   * No description
   * @name RoleList
   * @request GET:/role/
   */
  export namespace RoleList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name RoleCreate
   * @request POST:/role/
   */
  export namespace RoleCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = { role?: any };
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name RoleDetail
   * @request GET:/role/{id}
   */
  export namespace RoleDetail {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name RoleUpdate
   * @request PUT:/role/{id}
   */
  export namespace RoleUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = { role?: any };
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name RoleDelete
   * @request DELETE:/role/{id}
   */
  export namespace RoleDelete {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace Document {
  /**
   * No description
   * @name DocumentList
   * @request GET:/document/
   */
  export namespace DocumentList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name DocumentCreate
   * @request POST:/document/
   */
  export namespace DocumentCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = { documentProducts?: any; discount?: any; status?: any };
    export type RequestHeaders = {
      createdby?: string;
      companyid?: string;
      documenttypeid?: string;
    };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name DocumentDetail
   * @request GET:/document/{id}
   */
  export namespace DocumentDetail {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded'
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || 'http://localhost:4000'
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    return {
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === 'object' && property !== null
          ? JSON.stringify(property)
          : `${property}`
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        ...(requestParams.headers || {})
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path
    });
  };
}

/**
 * @title REST API
 * @version 1.0.0
 * @baseUrl http://localhost:4000
 *
 * company api
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  company = {
    /**
     * No description
     *
     * @name UserDetail
     * @request GET:/company/user/{id}
     */
    userDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/company/user/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @name CompanyList
     * @request GET:/company/
     */
    companyList: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/company/`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @name CompanyCreate
     * @request POST:/company/
     */
    companyCreate: (
      data: { name?: any; email?: any; phone?: any; pan?: any; gst?: any; cin?: any },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/company/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name CompanyDetail
     * @request GET:/company/{id}
     */
    companyDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/company/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @name CompanyUpdate
     * @request PUT:/company/{id}
     */
    companyUpdate: (
      id: string,
      data: { name?: any; email?: any; phone?: any; pan?: any; gst?: any; cin?: any },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/company/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name CompanyDelete
     * @request DELETE:/company/{id}
     */
    companyDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/company/${id}`,
        method: 'DELETE',
        ...params
      })
  };
  gst = {
    /**
     * No description
     *
     * @name GetGst
     * @request GET:/gst/
     */
    getGst: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gst/`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @name PostGst
     * @request POST:/gst/
     */
    postGst: (data: { name?: any; description?: any; tax?: any }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gst/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name GetGst2
     * @request GET:/gst/{id}
     * @originalName getGst
     * @duplicate
     */
    getGst2: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gst/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @name PutGst
     * @request PUT:/gst/{id}
     */
    putGst: (
      id: string,
      data: { name?: any; description?: any; tax?: any },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/gst/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name DeleteGst
     * @request DELETE:/gst/{id}
     */
    deleteGst: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gst/${id}`,
        method: 'DELETE',
        ...params
      })
  };
  product = {
    /**
     * No description
     *
     * @name ProductList
     * @request GET:/product/
     */
    productList: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/product/`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @name ProductCreate
     * @request POST:/product/
     */
    productCreate: (
      data: { name?: any; description?: any; quantity?: any; direction?: any },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/product/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name ProductDetail
     * @request GET:/product/{id}
     */
    productDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/product/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @name ProductUpdate
     * @request PUT:/product/{id}
     */
    productUpdate: (
      id: string,
      data: { name?: any; description?: any },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/product/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name ProductDelete
     * @request DELETE:/product/{id}
     */
    productDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/product/${id}`,
        method: 'DELETE',
        ...params
      })
  };
  user = {
    /**
     * No description
     *
     * @name UserList
     * @request GET:/user/
     */
    userList: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @name UserCreate
     * @request POST:/user/
     */
    userCreate: (
      data: { password?: any; email?: any; avatar?: any; name?: any },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/user/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name UserUpdate
     * @request PUT:/user/{id}
     */
    userUpdate: (id: string, data: { email?: any; password?: any }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name UserDelete
     * @request DELETE:/user/{id}
     */
    userDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/${id}`,
        method: 'DELETE',
        ...params
      })
  };
  category = {
    /**
     * No description
     *
     * @name CategoryList
     * @request GET:/category/
     */
    categoryList: (query?: { parentId?: string }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category/`,
        method: 'GET',
        query: query,
        ...params
      }),

    /**
     * No description
     *
     * @name CategoryCreate
     * @request POST:/category/
     */
    categoryCreate: (data: { name?: any }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name CategoryDetail
     * @request GET:/category/{id}
     */
    categoryDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @name CategoryUpdate
     * @request PUT:/category/{id}
     */
    categoryUpdate: (id: string, data: { name?: any }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name CategoryDelete
     * @request DELETE:/category/{id}
     */
    categoryDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category/${id}`,
        method: 'DELETE',
        ...params
      })
  };
  role = {
    /**
     * No description
     *
     * @name RoleList
     * @request GET:/role/
     */
    roleList: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/role/`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @name RoleCreate
     * @request POST:/role/
     */
    roleCreate: (data: { role?: any }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/role/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name RoleDetail
     * @request GET:/role/{id}
     */
    roleDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/role/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @name RoleUpdate
     * @request PUT:/role/{id}
     */
    roleUpdate: (id: string, data: { role?: any }, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/role/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name RoleDelete
     * @request DELETE:/role/{id}
     */
    roleDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/role/${id}`,
        method: 'DELETE',
        ...params
      })
  };
  document = {
    /**
     * No description
     *
     * @name DocumentList
     * @request GET:/document/
     */
    documentList: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/document/`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @name DocumentCreate
     * @request POST:/document/
     */
    documentCreate: (
      data: { documentProducts?: any; discount?: any; status?: any },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/document/`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @name DocumentDetail
     * @request GET:/document/{id}
     */
    documentDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/document/${id}`,
        method: 'GET',
        ...params
      })
  };
}
