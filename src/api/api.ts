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
   * @tags Company/User
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
   * @tags Company
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
   * @tags Company
   * @name CompanyCreate
   * @request POST:/company/
   */
  export namespace CompanyCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = { userid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Company
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
   * @tags Company
   * @name CompanyUpdate
   * @request PUT:/company/{id}
   */
  export namespace CompanyUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Company
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
   * @tags Gst
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
   * @tags Gst
   * @name PostGst
   * @request POST:/gst/
   */
  export namespace PostGst {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = { companyid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Gst
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
   * @tags Gst
   * @name PutGst
   * @request PUT:/gst/{id}
   */
  export namespace PutGst {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = { companyid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Gst
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
   * @tags Product
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
   * @tags Product
   * @name ProductCreate
   * @request POST:/product/
   */
  export namespace ProductCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = { categoryid?: string; gstid?: string; companyid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Product
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
   * @tags Product
   * @name ProductUpdate
   * @request PUT:/product/{id}
   */
  export namespace ProductUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = { categoryid?: string; gstid?: string; companyid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Product
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
   * @tags User
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
   * @tags User
   * @name UserCreate
   * @request POST:/user/
   */
  export namespace UserCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags User
   * @name UserUpdate
   * @request PUT:/user/{id}
   */
  export namespace UserUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags User
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
   * @tags Category
   * @name CategoryList
   * @request GET:/category/
   */
  export namespace CategoryList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Category
   * @name CategoryCreate
   * @request POST:/category/
   */
  export namespace CategoryCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = { companyid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Category
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
   * @tags Category
   * @name CategoryUpdate
   * @request PUT:/category/{id}
   */
  export namespace CategoryUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = { companyid?: string };
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Category
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
   * @tags Role
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
   * @tags Role
   * @name RoleCreate
   * @request POST:/role/
   */
  export namespace RoleCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Role
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
   * @tags Role
   * @name RoleUpdate
   * @request PUT:/role/{id}
   */
  export namespace RoleUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Role
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
   * @tags Document
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
  /**
   * No description
   * @tags Document
   * @name DocumentCreate
   * @request POST:/document/
   */
  export namespace DocumentCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {
      createdby?: string;
      companyid?: string;
      documenttypeid?: string;
    };
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
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' });
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
 * @title company api
 * @version 1.0.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  company = {
    /**
     * No description
     *
     * @tags Company/User
     * @name UserDetail
     * @request GET:/company/user/{id}
     */
    userDetail: (id: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/company/user/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @tags Company
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
     * @tags Company
     * @name CompanyCreate
     * @request POST:/company/
     */
    companyCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/company/`,
        method: 'POST',
        ...params
      }),

    /**
     * No description
     *
     * @tags Company
     * @name CompanyDetail
     * @request GET:/company/{id}
     */
    companyDetail: (id: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/company/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @tags Company
     * @name CompanyUpdate
     * @request PUT:/company/{id}
     */
    companyUpdate: (id: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/company/${id}`,
        method: 'PUT',
        ...params
      }),

    /**
     * No description
     *
     * @tags Company
     * @name CompanyDelete
     * @request DELETE:/company/{id}
     */
    companyDelete: (id: any, params: RequestParams = {}) =>
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
     * @tags Gst
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
     * @tags Gst
     * @name PostGst
     * @request POST:/gst/
     */
    postGst: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gst/`,
        method: 'POST',
        ...params
      }),

    /**
     * No description
     *
     * @tags Gst
     * @name GetGst2
     * @request GET:/gst/{id}
     * @originalName getGst
     * @duplicate
     */
    getGst2: (id: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gst/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @tags Gst
     * @name PutGst
     * @request PUT:/gst/{id}
     */
    putGst: (id: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/gst/${id}`,
        method: 'PUT',
        ...params
      }),

    /**
     * No description
     *
     * @tags Gst
     * @name DeleteGst
     * @request DELETE:/gst/{id}
     */
    deleteGst: (id: any, params: RequestParams = {}) =>
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
     * @tags Product
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
     * @tags Product
     * @name ProductCreate
     * @request POST:/product/
     */
    productCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/product/`,
        method: 'POST',
        ...params
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductDetail
     * @request GET:/product/{id}
     */
    productDetail: (id: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/product/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductUpdate
     * @request PUT:/product/{id}
     */
    productUpdate: (id: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/product/${id}`,
        method: 'PUT',
        ...params
      }),

    /**
     * No description
     *
     * @tags Product
     * @name ProductDelete
     * @request DELETE:/product/{id}
     */
    productDelete: (id: any, params: RequestParams = {}) =>
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
     * @tags User
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
     * @tags User
     * @name UserCreate
     * @request POST:/user/
     */
    userCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/user/`,
        method: 'POST',
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserUpdate
     * @request PUT:/user/{id}
     */
    userUpdate: (id: any, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/${id}`,
        method: 'PUT',
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserDelete
     * @request DELETE:/user/{id}
     */
    userDelete: (id: any, params: RequestParams = {}) =>
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
     * @tags Category
     * @name CategoryList
     * @request GET:/category/
     */
    categoryList: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category/`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryCreate
     * @request POST:/category/
     */
    categoryCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category/`,
        method: 'POST',
        ...params
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryDetail
     * @request GET:/category/{id}
     */
    categoryDetail: (id: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryUpdate
     * @request PUT:/category/{id}
     */
    categoryUpdate: (id: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/category/${id}`,
        method: 'PUT',
        ...params
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryDelete
     * @request DELETE:/category/{id}
     */
    categoryDelete: (id: any, params: RequestParams = {}) =>
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
     * @tags Role
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
     * @tags Role
     * @name RoleCreate
     * @request POST:/role/
     */
    roleCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/role/`,
        method: 'POST',
        ...params
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleDetail
     * @request GET:/role/{id}
     */
    roleDetail: (id: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/role/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleUpdate
     * @request PUT:/role/{id}
     */
    roleUpdate: (id: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/role/${id}`,
        method: 'PUT',
        ...params
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleDelete
     * @request DELETE:/role/{id}
     */
    roleDelete: (id: any, params: RequestParams = {}) =>
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
     * @tags Document
     * @name DocumentDetail
     * @request GET:/document/{id}
     */
    documentDetail: (id: any, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/document/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * No description
     *
     * @tags Document
     * @name DocumentCreate
     * @request POST:/document/
     */
    documentCreate: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/document/`,
        method: 'POST',
        ...params
      })
  };
}
